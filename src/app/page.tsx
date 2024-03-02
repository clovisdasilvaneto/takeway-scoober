import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Game from "@/containers/Game";
import RoomsProvider from "@/providers/RoomsProvider";
import { authOptions } from "@/services/auth";
import { getRooms } from "@/services/rooms";
import { getServerSession } from "next-auth";

export default async function GamePage() {
  const session = await getServerSession(authOptions);
  const rooms = await getRooms();

  return (
    <>
      <Header description={`Playing with ${session?.user?.name}`} />

      <RoomsProvider rooms={rooms}>
        <Game />
      </RoomsProvider>

      <Footer />
    </>
  );
}
