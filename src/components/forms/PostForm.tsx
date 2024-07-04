import * as z from "zod";
import { Models } from "appwrite";
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

type PostFormProps = {
  post?: Models.Document;
  action: "Create" | "Update";
};

const PostForm = ({ post, action }: PostFormProps) => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const form = useForm<z.infer<typeof PostValidation>>({
    resolver: zodResolver(PostValidation),
    defaultValues: {
      caption: post ? post?.caption : ""
    },
  });

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
              <FormMessage className="shad-form_message" />
            </FormItem>
          )}
        />

        <div className="flex gap-4 items-center justify-end">
          <Button
            type="submit"
            className="btn"
            disabled={isLoadingCreate}>
            {(isLoadingCreate) && <Loader />}
            Оставить заявку
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default PostForm;
