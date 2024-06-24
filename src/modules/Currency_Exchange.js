import axios from "axios";

export const Exchange = async (req, res, next) => {
    const { from, to } = req.body;
    if (!from || !to) {
        return next(new Error("PLEASE PROVIDE BOTH TO AND FROM", 404));
    }

    const API_URL = "https://api.apyhub.com/data/convert/currency/multiple"
    const APY_TOKEN =process.env.EXCHANGE_RATE_API_KEY

        const response = await axios.post(
            API_URL,
            {
                source: from,
                targets: [to]
            },
            {
                headers: {
                    "Content-Type": "application/json",
                    "apy-token": APY_TOKEN
                }
            }
        );

        const rate = response.data[`${from.toLowerCase()}_${to.toLowerCase()}`];

        if (!rate) {
            return next(new Error(`Unable to find exchange rate for ${from}_${to}.`, 400));
        }

        res.json({ rate });
    
};
