import { NextResponse } from "next/server";
import connect from "../../../../db";
import products from "../../models/product";

const GET = async (request) => {
  try {
    await connect();
    const products = await products.find();
    console.log(products);

    return new NextResponse(JSON.stringify(products), {
      status: 200,
    });
  } catch (error) {
    return new NextResponse("Error in fetching products" + error, {
      status: 500,
    });
  }
};

export default GET;
