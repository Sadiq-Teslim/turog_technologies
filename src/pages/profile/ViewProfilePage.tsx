import { Icons, SimpleText, TilePanel } from "@adiba-banking-cloud/backoffice";
import {
  ActionIcon,
  Avatar,
  Button,
  Card,
  Grid,
  Group,
  Space,
  Stack,
  Text,
} from "@mantine/core";
import React from "react";
import { Link } from "react-router-dom";

export const ViewProfilePage = () => {
  const user = {
    name: "John Doe",
    avatar: "https://i.pravatar.cc/150?u=1",
    email: "john.doe@contoso.com",
    cover: "https://picsum.photos/id/16/2500/1667.jpg",
    phone: "+2348123456789",
    language: "English",
    timezone: "Africa/Lagos",
    city: "Lagos",
    country: "Nigeria",
    organization: "Super",
    jobTitle: "Software Engineer",
  };
  const userTiles = [
    {
      label: "Email",
      value: user.email,
    },
    {
      label: "Phone",
      value: user.phone,
    },
    {
      label: "Organization",
      value: user.organization,
    },
    {
      label: "Job Title",
      value: user.jobTitle,
    },
    {
      label: "Language & Timezone",
      value: `${user.language} - ${user.timezone}`,
    },
    {
      label: "City & Country",
      value: `${user.city}, ${user.country}`,
    },
  ];
  return <ProfileCard {...user} userTiles={userTiles} />;
};

const ProfileCard = ({
  name,
  avatar,
  email,
  cover,
  userTiles,
}: {
  name: string;
  avatar: string;
  email: string;
  cover: string;
  userTiles: { label: string; value: string }[];
}) => {
  return (
    <>
      <Card p={0}>
        <Card.Section
          mih={140}
          style={{
            backgroundColor: "#cecece",
            backgroundImage: `url(${cover})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "15px",
          }}
        />
        <Stack gap={5} mt={"-40px"} w={"100%"} align={"center"} h={"100%"}>
          <Avatar
            bg={"white"}
            size={"xl"}
            src={avatar}
            radius={"md"}
            key={name}
            name={name}
            color="initials"
            bd={"3px solid white"}
          />
          <Group gap={5}>
            <Text fw={400} fz={"md"} c={"adiba.5"}>
              {name}
            </Text>
            <ActionIcon variant="subtle" size="sm">
              <Icons name="Edit2" size={16} />
            </ActionIcon>
          </Group>
          <Text fw={300} fz={"sm"} c={"adiba.5"}>
            {email}
          </Text>
        </Stack>
      </Card>
      <Stack flex={1}>
        <Grid gutter={"xs"} >
          {userTiles.map((tile, index) => (
            <Grid.Col span={6} key={`${tile.label}-${index}`}>
              <TilePanel label={tile.label} value={tile.value} />
            </Grid.Col>
          ))}
        </Grid>
        <Space flex={1} />
        <Group justify="flex-end" grow gap={10} w={"100%"}>
          <Button
            size="lg"
            component={Link}
            to="/settings/preferences?dc=true"
            radius={"40px"}
            w={"50%"}
          >
            <SimpleText
              label="View Full Profile"
              fw={300}
              fz={"sm"}
              c={"white"}
              smaller={true}
            />
            {/* TODO: translate */}
          </Button>
        </Group>
      </Stack>
    </>
  );
};
