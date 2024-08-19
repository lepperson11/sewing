import { NextResponse } from "next/server";
import connect from "../../../../db";
import product from "../../models/product";

export const GET = async (request) => {
  try {
    await connect();
    const products = await product.find();
    return new NextResponse(JSON.stringify(products), {
      status: 200,
    });
  } catch (error) {
    return new NextResponse("Error in fetching products" + error, {
      status: 500,
    });
  }
};
