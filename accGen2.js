const request= require('request');


process.env.UV_THREADPOOL_SIZE = 128;
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

request({
    // proxy :'http://69.167.174.17:80',
    url:'https://www.bestbuy.com/identity/createAccount',
    method: 'POST',
    json: true,
    timeout: 120000,
    time: true,
    agent: false,
    pool: {
        maxSockets: 100
    },
    strictSSL: false,
    body: {
        "Roe": "2A98F",
        "addressLine1": null,
        "addressLine2": null,
        "alpha": "EpVNQpnWhp1V5A1QLllZLRlNCpVYSBlNyoXZHlna2d1dFhlVfF0XzkzN1UTMxEDN0IDOwkDN2MDO2IjNxATN0kjMzIzNzUzM2QjN3gjM",
        "businessName": null,
        "businessPhone": null,
        "city": null,
        "email_qOZuQh1x44GqvmaADzX1N8OrFHlcz9ei9%2BAoAGtV4PSM0vRSCUgRirpLNXHIQ7AI": "kilim53681@seatto.com",
        "firstName": "ramu",
        "isRecoveryPhone": false,
        "lastName": "singh",
        "memberId": "",
        "password_7XKG2ki6HqbFASbnFfOEc%2BqLnMPR7Bm%2BrwmXjPcEVRq%2Fh%2Bp2FNfshDt34%2BphYSBP": "Qwerty123$%^",
        "phone": "2067897829",
        "reenterPassword_gaLhq7ehGIfpcBM%2BUoNUBZ%2BNInIei0P%2B1DwfWUtxqb6BEieKaaVy4e%2FeSc9zxWK8": "Qwerty123$%^",
        "state": null,
        "token": "tid%3A146ed9f6-d967-11eb-bbe0-0a495cd150dd",
        "zip": null},
    headers:{
        'access-control-allow-origin': 'https://www.bestbuy.com',
        'cache-control': 'max-age=0, no-cache, no-store',
        'accept': 'application/json',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'en-US,en;q=0.9',
        'content-length': '704',
        'content-type': 'application/json',
        'cookie': 'CTT=fdf06348eb1d4cbb4c85958dc052f0f1; intl_splash=false; intl_splash=false; oid=1989829329; vt=f2a4fd1d-d7ea-11eb-9cef-0ee51e6fd989; locDestZip=96939; locStoreId=852; sc-location-v2=%7B%22meta%22%3A%7B%22CreatedAt%22%3A%222021-06-28T08%3A29%3A36.381Z%22%2C%22ModifiedAt%22%3A%222021-06-28T08%3A29%3A36.592Z%22%2C%22ExpiresAt%22%3A%222022-06-28T08%3A29%3A36.592Z%22%7D%2C%22value%22%3A%22%7B%5C%22physical%5C%22%3A%7B%5C%22zipCode%5C%22%3A%5C%2296939%5C%22%2C%5C%22source%5C%22%3A%5C%22A%5C%22%2C%5C%22captureTime%5C%22%3A%5C%222021-06-28T08%3A29%3A36.377Z%5C%22%7D%2C%5C%22destination%5C%22%3A%7B%5C%22zipCode%5C%22%3A%5C%2296939%5C%22%7D%2C%5C%22store%5C%22%3A%7B%5C%22storeId%5C%22%3A852%2C%5C%22zipCode%5C%22%3A%5C%2296701%5C%22%2C%5C%22storeHydratedCaptureTime%5C%22%3A%5C%222021-06-28T08%3A29%3A36.591Z%5C%22%7D%7D%22%7D; UID=838747f7-722f-4e9d-980d-de4db1945ed4; G_ENABLED_IDPS=google; bby_rdp=l; ui=1624966104271; basketTimestamp=1624966743333; SID=6583ec09-7508-4de0-b4e5-f271fbbeb4e5; bm_sz=CACF63F68677251AD262BB013102466A~YAAQPdjIFzKkf1J6AQAAE95uWwwinAmEmHAFKREpzYLK7Hamo6Xznh+jVAngF4S5Z7OxB1ya5zUttDydY6RO0DVwDkBWQ/DUNefRDfg/AJkqNxs/SI3hA2MAHV+EZM5PeNlK+n/NtReZ1xkjQB+lVNNzmHPq6h3MifQToHfT/0aertK8FXYHZcbkU3qNYXQ0AtVuxvp2HoJU2DAfwaAmdvQ1dNnvqIJNlGMO9oa6ddPGpbvfpC4Jb/uhxMYA/H+TCVUHyFz9wojF/P4BQbqVIpEYBszOaTnW1HtO+Q==; ltc=%20; rxVisitor=16250322112759QHMRMGB0592867FF89BQA83HQVPK69I; COM_TEST_FIX=2021-06-30T05%3A50%3A16.362Z; c6db37d7c8add47f1af93cf219c2c682=6b165790a1a9cc17b4b6d8dfb966ef83; ZPLANK=843b88361e694fd4b6f02b8e12b14a69; bby_idn_lb=p-idn-cloud; dtSa=-; rxvt=1625034064122|1625032211278; dtPC=2$232230946_724h-vBVUIHHGAADAMRGAUCLRCDRMAHUUMLNQG-0e2; dtCookie=v_4_srv_2_sn_MH4UFPSO280GFG66JE8NB8IIAEF58BE8_app-3Aea7c4b59f27d43eb_1_app-3A1531b71cca36e130_1_ol_0_perc_100000_mul_1; dtLatC=227; _abck=3207C96CC24833B4E0A9F627668C89D0~0~YAAQnnUsMbZ7xO55AQAADbt/WwZs8trUpfjX+03bqGjprX/9MiZw1TxGUGJ47QqIezqAzqSw6nDGdijO6fPF45AblZVTL3/TR0fAlECei+bUdef1M4Kl+nROccRhQUJy6++c/IJwYAVxKvooo3TdussklBIIPWbNCPeSpOo+ObLJHGyJ01x1AGDS2mB9U06taAL+wbB5pPMtK3xi3IFqyE1caN6bGr796PrwGq2bcmxwbgyId0LoEaZq2P+6YeZM2mXW+qJsX7GaTVUq+94esKfCn1ue7FaFY1Am0Y7vD65VP80IwyHOk72DdgNq+u80AlviUkr9RqcGLv4pfVuW6TeUhdzPHFPSxeT7BQ0mS3KnTzys3GLcKFBl6CrN6gPKnFUgVTQw3RNJ2ZkxRL3qirTGkK11KqEZBbck8OXvnaWwzfiOJWTZ95KC7mbyBj/e~-1~-1~-1',
        'origin': 'https://www.bestbuy.com',
        'referer': 'https://www.bestbuy.com/identity/newAccount?token=tid%3A146ed9f6-d967-11eb-bbe0-0a495cd150dd',
        'sec-ch-ua': '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        'sec-ch-ua-mobile': '?0',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
        'user-agent': 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.123 Safari/537.36',
        'x-grid': '1:cia-grid-v1:nTfuE80D0Fgb1sDqvXAhHJUKkge5z6snJTDMm7miF3VYdw5te6pDBBAkDRgkOYIKLuXoPhVI3poVNmB+Rm2niynec8CV5Py24kWgQCy6ehPYE4w46bUjX0zV0hPxHf9DMXdLhBMewvY85b1S4y3PXqJSX5j5FvpYvw8DwEAi4LLkPLcdwRhKipuF2woDNjyqWAtIBcgg07u5ls9XCVH4gqclEL94lVI9OzN56JI4uLibQfQp7wiU021G3fzEbj0eAd8bb8D/0hE5UPbSbRTBOImFephZYt5V0iLxdB+4/q3rM8slGwCMBhwZWC5AQYQXDchQQqElMh1Dh2B3dWKdkuSAu9IxOYy66wvvQ8+zBvh+DxFPTw16po76sjaLNTz1oC0TXr0DURc58Rpg2esMQlVusN0fnPhxNRr+nPNGVSg/HgnJF5jmieq4ajD4YA600+vRI3uWU4ZQYxImoL2uJ0CGqQ5L3rKFhLV6pL1OQWGsuk65nGchPdef1JSO1JvGXSlCBG7YjtkBuE3rpGpVINK3sQ7T8YEK/wRc48cLHIHyxJzSUtHxzzwG8zTQgYmhjOsuKw/E9agimewNRA/R/h67QxGiCQXy3jQk3mIZDo9RAKjxbr+mjREgWPxjtcmhdpLRUTHhJ8OUuXhd1kOp/9vunOOZTWFcr4iJanHX62Q=',
        'x-grid-b': '{"gCV":"Google Inc. (Intel)","gCN":"ANGLE (Intel, Intel(R) HD Graphics Family Direct3D9Ex vs_3_0 ps_3_0, igdumd32.dll-8.15.10.2778)","aB":"101.45646868248605","sR":"1366, 768","sL":"en-US","sF":"981705900534d36f0f2da2b34771352821250c53","sFC":223,"sT":"GMT+0530 (India Standard Time)"}',
    }
}, function(err,res,body){
    if(err){
        console.log("Something went wrong");
        console.log(err);
    }
    else{
        console.log(res.statusCode);
    }
    console.log(body);
    // console.log(res);
})