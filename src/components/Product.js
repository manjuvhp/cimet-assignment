import { Card, CardContent, Grid } from "@mui/material";
import React from "react";
import styled from "styled-components";
import RawHtml from "./common/RawHtml";

const ProviderDiv = styled.div`
  color: #39b5e0;
  text-align: center;

  .something {
    border: 1px solid; // an element labeled ".something" inside <Thing>
    display: block;
  }
`;

const StyleButton = styled.button`
  border-radius: 50px;
  padding: 10px 20px;
  border: 0;
  background: #fd8a8a;
  color: #fff;
  font-size: 18px;
  cursor: pointer;
`;

const PriceCardDiv = styled.div`
  color: #0081c9;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .price-card {
    border-radius: 5px;
    background: #f1f7b5;
    width: 280px;
  }
  .title {
    background: #fd8a8a;
    padding: 5px 30px;
    color: #fff;
    border-radius: 5px 5px 0px 0px;
    font-size: 20px;
  }
  .annual-bill {
    font-size: 34px;
    font-weight: 600;
    padding: 20px 20px;
  }
  .monthly-bill {
    font-size: 22px;
    font-weight: 800;
    padding: 0px 20px 20px;
  }
  .sub-script {
    font-size: 18px;
    color: gray;
  }
  p {
    padding: 0;
    margin: 0;
  }
`;

const Product = ({ plan }) => {
  return (
    <div className="product-card">
      <Card>
        <CardContent sx={{ p:0, '&:last-child': { pb: 0 }}}>
          <Grid container sx={{pt:4}}>
            <Grid md={4}>
              <ProviderDiv>
                <img
                  src={plan.provider_image}
                  alt={plan.provider_name}
                  width="150px"
                />
                <p>View Details</p>
                <p>Basic information Document</p>
              </ProviderDiv>
            </Grid>
            <Grid md={4}>
              <p>{plan?.dmo_percentage.Ausgrid}</p>
              <p>the current reference price</p>
              {plan.plan_desc}
              <RawHtml htmlData={plan.features} />
            </Grid>
            <Grid md={4}>
              <PriceCardDiv>
                <div className="price-card">
                  <p className="title">Esimated Cost</p>
                  <p className="annual-bill">
                    ${plan.expected_annually_bill_amount}{" "}
                    <span className="sub-script">/yr</span>
                  </p>
                  <p className="monthly-bill">
                    ${plan.expected_monthly_bill_amount}{" "}
                    <span className="sub-script">/mo</span>
                  </p>
                </div>
              </PriceCardDiv>
            </Grid>
          </Grid>
          <Grid container sx={{background: "#BFEAF5", padding:4}}>
            <Grid item md={8}>
              <RawHtml htmlData={plan.dmo_content.Ausgrid} />
            </Grid>
            <Grid
              item
              md={4}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignContent: "center",
                alignItems: "center",
                alignSelf: "center",
              }}
            >
              <StyleButton>Connect Online Today</StyleButton>
            </Grid>
          </Grid>

          {/* <RawHtml htmlData={plan.terms_condition} /> */}
        </CardContent>
      </Card>
    </div>
  );
};

export default Product;
