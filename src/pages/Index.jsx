import React from "react";
import { Box, Heading, Text, Flex, Button, Image, Grid, GridItem, Avatar, AvatarBadge, Tabs, TabList, TabPanels, Tab, TabPanel, List, ListItem, ListIcon, Divider, Link, Spacer } from "@chakra-ui/react";
import { FaUser, FaTasks, FaClock, FaTrophy, FaVideo, FaCalendarAlt, FaComments, FaCertificate } from "react-icons/fa";

const Index = () => {
  return (
    <Box bg="blue.50" minH="100vh" p={8}>
      <Flex align="center" mb={8}>
        <Image src="https://images.unsplash.com/photo-1462536943532-57a629f6cc60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwZ3JvdXAlMjBsb2dvfGVufDB8fHx8MTcxMTE2NDM2N3ww&ixlib=rb-4.0.3&q=80&w=1080" alt="Logo" w={12} h={12} mr={4} />
        <Heading size="xl" color="blue.600" fontFamily="Japanese font">
          学生団体管理アプリ
        </Heading>
      </Flex>

      <Grid templateColumns="repeat(4, 1fr)" gap={8}>
        <GridItem>
          <Box bg="white" p={6} borderRadius="lg" boxShadow="md">
            <Flex align="center" mb={4}>
              <Avatar size="lg" src="https://images.unsplash.com/photo-1544717305-2782549b5136?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwcG9ydHJhaXR8ZW58MHx8fHwxNzExMTY0MzY4fDA&ixlib=rb-4.0.3&q=80&w=1080">
                <AvatarBadge boxSize="1.25em" bg="green.500" />
              </Avatar>
              <Box ml={4}>
                <Heading size="md">田中太郎</Heading>
                <Text>管理メンバー</Text>
              </Box>
            </Flex>
            <Link href="/mypage">
              <Button leftIcon={<FaUser />} colorScheme="blue" variant="outline" size="sm">
                マイページ
              </Button>
            </Link>
          </Box>
        </GridItem>

        <GridItem colSpan={2}>
          <Tabs isFitted variant="enclosed">
            <TabList>
              <Tab>
                <FaTasks /> タスク管理
              </Tab>
              <Tab>
                <FaClock /> 勤怠管理
              </Tab>
              <Tab>
                <FaTrophy /> 活動時間ランキング
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <List spacing={3}>
                  <ListItem>
                    <ListIcon as={FaTasks} color="green.500" />
                    会議資料の作成
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaTasks} color="green.500" />
                    イベントの企画
                  </ListItem>
                </List>
                <Button mt={4} colorScheme="blue" size="sm">
                  タスクをリクエスト
                </Button>
              </TabPanel>
              <TabPanel>
                <Text mb={4}>2023年4月の勤怠</Text>
                <List spacing={3}>
                  <ListItem>
                    <ListIcon as={FaClock} color="green.500" />
                    4/1 09:00 - 18:00
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaClock} color="green.500" />
                    4/2 10:00 - 19:00
                  </ListItem>
                </List>
              </TabPanel>
              <TabPanel>
                <List spacing={3}>
                  <ListItem>
                    <ListIcon as={FaTrophy} color="yellow.500" />
                    1位 田中太郎 (120時間)
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaTrophy} color="gray.500" />
                    2位 山田花子 (100時間)
                  </ListItem>
                </List>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </GridItem>

        <GridItem>
          <Box bg="white" p={6} borderRadius="lg" boxShadow="md">
            <Heading size="md" mb={4}>
              ミーティング
            </Heading>
            <Link href="/meetings" mb={4} display="block">
              <Button leftIcon={<FaVideo />} colorScheme="pink" variant="outline" size="sm">
                録画を見る・アップロード
              </Button>
            </Link>
            <Divider my={4} />
            <Heading size="md" mb={4}>
              スケジュール
            </Heading>
            <Link href="/calendar">
              <Button leftIcon={<FaCalendarAlt />} colorScheme="blue" variant="outline" size="sm" mb={4}>
                カレンダーを見る
              </Button>
            </Link>
            <Button leftIcon={<FaVideo />} colorScheme="pink" size="sm">
              Zoomを開く
            </Button>
          </Box>
        </GridItem>

        <GridItem colSpan={4}>
          <Box bg="white" p={6} borderRadius="lg" boxShadow="md">
            <Heading size="lg" mb={4}>
              コミュニケーション
            </Heading>
            <Tabs isFitted variant="enclosed">
              <TabList>
                <Tab>
                  <FaComments /> 管理メンバー
                </Tab>
                <Tab>
                  <FaComments /> プロジェクトメンバー
                </Tab>
                <Tab>
                  <FaComments /> コミュニティメンバー
                </Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <Box p={4} borderWidth={1} borderRadius="lg">
                    管理メンバー用チャット
                  </Box>
                </TabPanel>
                <TabPanel>
                  <Box p={4} borderWidth={1} borderRadius="lg">
                    プロジェクトメンバー用チャット
                  </Box>
                </TabPanel>
                <TabPanel>
                  <Box p={4} borderWidth={1} borderRadius="lg">
                    コミュニティメンバー用チャット
                  </Box>
                </TabPanel>
              </TabPanels>
            </Tabs>
            <Flex mt={4}>
              <Link href="/certification">
                <Button leftIcon={<FaCertificate />} colorScheme="green" variant="outline" size="sm" mr={4}>
                  活動証明書を発行
                </Button>
              </Link>
              <Spacer />
              <Button leftIcon={<FaVideo />} colorScheme="pink" size="sm">
                カジュアルビデオチャット
              </Button>
            </Flex>
          </Box>
        </GridItem>

        <GridItem colSpan={4}>
          <Heading size="lg" mb={4}>
            メンバー
          </Heading>
          <Flex>
            <Avatar src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtYWxlJTIwc3R1ZGVudCUyMHBvcnRyYWl0fGVufDB8fHx8MTcxMTE2NDM2OXww&ixlib=rb-4.0.3&q=80&w=1080" size="lg" mr={4} />
            <Avatar src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBzdHVkZW50JTIwcG9ydHJhaXR8ZW58MHx8fHwxNzExMTY0MzY5fDA&ixlib=rb-4.0.3&q=80&w=1080" size="lg" mr={4} />
            <Avatar src="https://images.unsplash.com/photo-1519058082700-08a0b56da9b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwyfHxtYWxlJTIwc3R1ZGVudCUyMHBvcnRyYWl0fGVufDB8fHx8MTcxMTE2NDM2OXww&ixlib=rb-4.0.3&q=80&w=1080" size="lg" mr={4} />
            <Link href="/members">
              <Button colorScheme="blue" size="sm">
                全てのメンバーを見る
              </Button>
            </Link>
          </Flex>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Index;
