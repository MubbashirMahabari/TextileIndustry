import React from "react";
import {Row,Col,Input,Form,Carousel,Card} from 'antd';
import image1 from './assets/images/img1.jpg';
import image2 from './assets/images/img2.jpg';
import image3 from './assets/images/img3.jpg';
import card3 from './assets/images/card3.jpg';
import card1 from './assets/images/card1.jpg';
import card2 from './assets/images/card2.jpg';
import {RightOutlined} from '@ant-design/icons';
import { useNavigate } from "react-router-dom";

const {Meta} = Card


const New = () => {
 const navigate = useNavigate();

    const contentStyle = {
        color: '#fff',
        width: '100%',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
      };
    return(
        <>
        <div>
            <Row gutter={[45, 55]}>
                <Col md={24} className='ant-col-24'>
                   <Carousel autoplay='true'>

                     <div>
                         <img style={contentStyle} src={image1} alt="" width='100%'/>
                     </div>
                     <div>
                         <img style={contentStyle} src={image2} alt="" width='100%'/> 
                     </div>
                     <div>
                         <img style={contentStyle} src={image3} alt="" width='100%'/>
                     </div>

                   </Carousel>
                </Col>
            </Row>
        </div>
<div>
    <h3>services</h3>
</div>
          <Row gutter={[60, 60]}>
              <Col md={2} className='ant-col-24'>
              </Col>


              <Col xl={6} lg={8} md={8} sm={12} xs={24} className='ant-col-24' onClick={() => navigate(`/shopping`)}>
                <Card 
                  hoverable
                    cover={
                       <div>
                           <img src={image1} alt="" width='100%' />
                       </div>
                   }
                >

               <Meta 
                 title= "Cotton Fabric"
                 description="im card 1"
               />

            
                </Card>
             </Col>

{/* card 2 */}
             <Col xl={6} lg={8} md={8} sm={12} xs={24} className='ant-col-24' onClick={() => navigate(`/shopping`)}>
                <Card 
                   hoverable
                     cover={
                       <div>
                           <img src={card2} alt="" width='100%' />
                       </div>
                   }
                 >

               <Meta 
                 title= "Cotton Fabric"
                 description="im card 2"
               />

            
                </Card>
             </Col>

{/* card 3 */}
             <Col xl={6} lg={8} md={8} sm={12} xs={24} className='ant-col-24' onClick={() => navigate(`/shopping`)}>
                <Card 
                  hoverable
                    cover={
                       <div>
                           <img src={card3} alt="" width='100%' />
                       </div>
                   }
                >

               <Meta 
                 title= "Cotton Fabric"
                 description="im card 3"
               />

            
                </Card>
             </Col>
          </Row>


        <div className="main-container" style={{padding: '20px'}}>
       
       <Form>
         <div>
           <Row gutter={[40,40]}> 

               <Col md={12} className="ant-col-24">
                 <Form.Item name='firstname'>
                   <Input placeholder="firstname" type='text' />
                 </Form.Item>
               </Col>

               <Col md={12} className="ant-col-24">
                <Form.Item name='lasttname'>
                   <Input placeholder="lastname" type='text' />
                </Form.Item>
                
            </Col>

            <Col md={12} className='ant-col-24'>
             <RightOutlined style={{backgroundColor: 'black',color:'white',fontSize:'40px' }} />
            </Col>

          </Row>
        </div>
       </Form>
    </div>
        </>
     
    );
}
export default New;