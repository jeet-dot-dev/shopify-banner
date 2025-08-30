import {
  Box,
  Card,
  Layout,
  Page,
  Text,
  BlockStack,
  Banner,
  List,
} from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";

export default function BannersPage() {
  return (
    <Page>
      <TitleBar title="Banner Configuration" />
      <Layout>
        <Layout.Section>
          <Card>
            <BlockStack gap="500">
              <Text as="h2" variant="headingMd">
                Promotion Banner Setup
              </Text>
              
              <Banner
                title="Banner Installation Status"
                tone="info"
              >
                <Text as="p" variant="bodyMd">
                  Your banner extension is deployed and ready to use!
                </Text>
              </Banner>

              <BlockStack gap="300">
                <Text as="h3" variant="headingMd">
                  Setup Instructions:
                </Text>
                <List type="number">
                  <List.Item>
                    Go to <strong>Online Store → Themes → Customize</strong>
                  </List.Item>
                  <List.Item>
                    Click on <strong>Header</strong> or any section
                  </List.Item>
                  <List.Item>
                    Click <strong>Add block</strong>
                  </List.Item>
                  <List.Item>
                    Find <strong>"Promotion Banner"</strong> in the Apps section
                  </List.Item>
                  <List.Item>
                    Add it and position at the top
                  </List.Item>
                  <List.Item>
                    Click <strong>Save</strong>
                  </List.Item>
                </List>
              </BlockStack>

              <BlockStack gap="300">
                <Text as="h3" variant="headingMd">
                  Quick Reset Options:
                </Text>
                <List>
                  <List.Item>
                    **Keyboard shortcut**: Press <code>Ctrl+Shift+B</code> on your storefront
                  </List.Item>
                  <List.Item>
                    **Browser console**: <code>localStorage.clear()</code>
                  </List.Item>
                  <List.Item>
                    **Specific banner**: 
                    <code>localStorage.removeItem('banner-closed-promotion-banner-ASE1QUHh1d0JIWHRMQ__13176787380975223725')</code>
                  </List.Item>
                </List>
              </BlockStack>

              <BlockStack gap="300">
                <Text as="h3" variant="headingMd">
                  Troubleshooting:
                </Text>
                <List>
                  <List.Item>
                    If banner doesn't show, clear browser localStorage
                  </List.Item>
                  <List.Item>
                    Check browser console (F12) for debug messages
                  </List.Item>
                  <List.Item>
                    Ensure the banner block is positioned correctly in theme
                  </List.Item>
                  <List.Item>
                    Disable "Remember when closed" setting to always show banner
                  </List.Item>
                </List>
              </BlockStack>

              <Box padding="400" background="bg-surface-info">
                <Text as="p" variant="bodyMd">
                  <strong>Default banner text:</strong> "🎉 Free Shipping on All Orders! 🎉"
                </Text>
              </Box>
            </BlockStack>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
}
