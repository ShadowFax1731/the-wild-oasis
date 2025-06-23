import { useQueryClient, useMutation } from "@tanstack/react-query";
import { createEditCabin } from "../../services/apiCabins";
import { toast } from "react-hot-toast";

export function useCreateCabin() {
  const queryClient = useQueryClient();
  const { mutate: createCabin, isPending: isCreating } = useMutation({
    mutationFn: createEditCabin, //has the same meaning as -> mutationFn: newCabin => createEditCabin(newCabin)
    onSuccess: () => {
      toast.success("New cabin created successfully");
      queryClient.invalidateQueries({ queryKey: ["cabin"] });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { isCreating, createCabin };
}
