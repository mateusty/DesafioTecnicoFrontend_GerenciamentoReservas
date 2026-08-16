import { CgHome } from "react-icons/cg"
import PageContainer from "../../Components/Layout/PageContainer"
import PageHeaderContainer from "../../Components/Layout/PageHeaderContainer"
import { Col } from "react-bootstrap"
import PageContentContainer from "../../Components/Layout/PageContentContainer"

export const HomePage = () => {
  return (
    <Col>
      <PageContainer>
        <PageHeaderContainer title="Home" icon={<CgHome/>}></PageHeaderContainer>
        <PageContentContainer>
          <p>HOME!!!</p>
        </PageContentContainer>
      </PageContainer>
    </Col>
  )
}
