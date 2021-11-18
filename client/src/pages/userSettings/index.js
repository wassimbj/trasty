import React from "react";
import styled from "styled-components";
import { Tab, TabWrapper } from "../../components/tabs";
import MdContainer from "../../components/mdContainer";
import Input from "../../components/input";
import { WhiteButton } from "../../components/button";

const PageTitle = styled.span`
  font-size: 22px;
  font-weight: 500;
`;

export default function UserSettings({ props }) {
  const activeTab = props.location.hash;

  return (
    <MdContainer>
      <PageTitle> Manage your profile </PageTitle>
      <TabWrapper>
        <Tab
          to="#general"
          className={(activeTab === "#general" || !activeTab) && "active"}
        >
          General info
        </Tab>
        <Tab to="#phone" className={activeTab === "#phone" && "active"}>
          Phone
        </Tab>
      </TabWrapper>

      <div style={{ maxWidth: "400px", margin: "2rem auto" }}>
        {activeTab === "#phone" ? (
          <form>
            <Input placeholder="11234567" type="text" label="phone number" />
            <br />
            <br />
            <WhiteButton> Save changes </WhiteButton>
          </form>
        ) : (
          <form>
            <Input placeholder="first name" type="text" label="first name" />
            <Input placeholder="last name" type="text" label="last name" />
            <br />
            <br />
            <WhiteButton> Save changes </WhiteButton>
          </form>
        )}
      </div>
    </MdContainer>
  );
}
