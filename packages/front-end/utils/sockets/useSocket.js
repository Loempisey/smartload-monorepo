import React from "react";
import { io } from "socket.io-client";
function useSocket(url) {
  const [socket, setSocket] = React.useState(null);

  React.useEffect(() => {
    const socketIo = io(url);
    setSocket(socketIo);
    function cleanup() {
      socketIo.disconnect();
    }
    return cleanup;
  }, []);

  return socket;
}

export default useSocket;