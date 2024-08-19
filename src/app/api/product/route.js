import { NextResponse } from "next/server";
import connect from "../../../../db";
import Products from "../../models/product";

export async function GET() {
  try {
    await connect();
    const products = await Products.find();

    if (!products) {
      return NextResponse.json({
        error: "Not Found",
        status: 404,
      });
    }
    return NextResponse.json({
      data: products,
      status: 200,
    });
  } catch (error) {
    return NextResponse.json({
      error: error,
      status: 500,
    });
  }
}
