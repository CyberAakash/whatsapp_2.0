import { Avatar, Button, IconButton } from "@mui/material";
import React from "react";
import styled from "styled-components";

import ChatIcon from "@mui/icons-material/Chat";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";

function Sidebar() {

  const createChat = () => {
    
  };
  return (
    <Container>
      <Header>
        <UseAvatar />
        <IconsContainer>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </IconsContainer>
      </Header>

      <Search>
        <SearchIcon />
        <SearchInput placeholder="Search in Chats" />
      </Search>

      <SidebarButton onClick={createChat}>Start a New Chat</SidebarButton>
      {/* List of Chats */}
    </Container>
  );
}

export default Sidebar;

// CSS
const Container = styled.div``;

const Header = styled.div`
  display: flex;
  position: sticky;
  z-index: 1;
  top: 0;
  background-color: white;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  height: 80px;
  border-bottom: 1px solid whitesmoke;
`;

const UseAvatar = styled(Avatar)`
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`;

const IconsContainer = styled.div``;

const Search = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  border-radius: 2px;
`;

const SearchInput = styled.input`
  outline-width: 0;
  border: none;
  flex: 1;
  margin-right: 5px;
`;

const SidebarButton = styled(Button)`
  width: 100%;
  &&& {
    border-top: 1px solid whitesmoke;
    border-bottom: 1px solid whitesmoke;
    color: black;
  }
`;
