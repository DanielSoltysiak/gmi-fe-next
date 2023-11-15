import { getNote } from "@/utils/getNote";
import { NotePage } from "./NotePage";

export default async function Page({ params }: { params: { id: string } }) {
  const note = await getNote(params.id);

  return <NotePage note={note} />;
}
