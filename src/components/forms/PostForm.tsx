import * as z from "zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Button,
  Textarea,
} from "@/components/ui";
import { PostValidation } from "@/lib/validation";
import { useToast } from "@/components/ui/use-toast";
import { Loader } from "@/components/shared";
import { useCreatePost } from "@/lib/react-query/queries";
import { useState } from "react";

type PostFormProps = {
  action: "Create" | "Update";
};

const PostForm = ({ action }: PostFormProps) => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const form = useForm<z.infer<typeof PostValidation>>({
    resolver: zodResolver(PostValidation),
    defaultValues: {
      caption: "",
      contact: "",
      link: ""
    },
  });

  const [radio, setRadio] = useState({
    contact: 'Telegram',
    item: 'link'
  })

  const { mutateAsync: createPost, isLoading: isLoadingCreate } =
    useCreatePost();
  const handleSubmit = async (value: z.infer<typeof PostValidation>) => {
    const newPost = await createPost({
      ...value
    });

    if (!newPost) {
      toast({
        title: `${action} post failed. Please try again.`,
      });
    }
    navigate("/");
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="formm">

        <div>
          <p className="subtitle">Как найти вещь<span>*</span></p>
          <div className="row">
            <div className="row" onClick={() => { setRadio({ ...radio, item: 'link' }) }}><div className="radio" style={{
              backgroundColor: `${radio.item === 'link' ? '#07ede9' : '#fff'}`
            }}></div>
              <p>Ссылка</p>
            </div>
            <div className="row" onClick={() => { setRadio({ ...radio, item: 'name' }) }}><div className="radio" style={{
              backgroundColor: `${radio.item === 'name' ? '#07ede9' : '#fff'}`
            }}></div>
              <p>Название</p>
            </div>
          </div>
        </div>

        <FormField
          control={form.control}
          name="link"
          render={({ field }) => (
            <FormItem
              className="formm"
            >
              <FormLabel className="subtitle">{radio.item == 'link' ? 'Ссылка на вещь' : 'Название товара'}<span>*</span></FormLabel>
              <FormControl>
                <Textarea
                  className="input"
                  {...field}
                />
              </FormControl>
              <FormMessage className="msg" />
            </FormItem>
          )}
        />

        <div>
          <p className="subtitle">Способ связи<span>*</span></p>
          <div className="row">
            <div className="row" onClick={() => { setRadio({ ...radio, contact: 'Telegram' }) }}><div className="radio" style={{
              backgroundColor: `${radio.contact === 'Telegram' ? '#07ede9' : '#fff'}`
            }}></div>
              <p>Telegram</p>
            </div>
            <div className="row" onClick={() => { setRadio({ ...radio, contact: 'Instagram' }) }}><div className="radio" style={{
              backgroundColor: `${radio.contact === 'Instagram' ? '#07ede9' : '#fff'}`
            }}></div>
              <p>Instagram</p>
            </div>
          </div>
        </div>

        <FormField
          control={form.control}
          name="contact"
          render={({ field }) => (
            <FormItem
              className="formm"
            >
              <FormLabel className="subtitle">Ваш {radio.contact}<span>*</span></FormLabel>
              <FormControl>
                <Textarea
                  className="input"
                  {...field}
                />
              </FormControl>
              <FormMessage className="msg" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="caption"
          render={({ field }) => (
            <FormItem
              className="formm"
            >
              <FormLabel className="subtitle">Комментарий</FormLabel>
              <FormControl>
                <Textarea
                  className="input"
                  {...field}
                />
              </FormControl>
              <FormMessage className="msg" />
            </FormItem>
          )}
        />

          <Button
            type="submit"
            className="btn"
            disabled={isLoadingCreate}>
            {(isLoadingCreate) && <Loader />}
            Отправить
          </Button>

        <p className="p">Нажимая "Отправить" я соглашаюсь на обработку персональных данных в соответсвии со статьёй 5 закона Республики Беларусь от 7 мая 2021 г. №99-3 "о защите персональных данных".</p>
      </form>
    </Form>
  );
};

export default PostForm;
