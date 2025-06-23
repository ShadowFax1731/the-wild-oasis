import { useQueryClient, useMutation } from "@tanstack/react-query";
import { createEditCabin } from "../../services/apiCabins";
import { toast } from "react-hot-toast";

export function useEditCabin() {
  const queryClient = useQueryClient();

  const { mutate: editCabin, isPending: isEditing } = useMutation({
    mutationFn: ({ newCabinData, id }) => createEditCabin(newCabinData, id), //has the same meaning as -> mutationFn: newCabin => createEditCabin(newCabin)
    onSuccess: () => {
      toast.success("New cabin edited successfully");
      queryClient.invalidateQueries({ queryKey: ["cabin"] });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { isEditing, editCabin };
}
