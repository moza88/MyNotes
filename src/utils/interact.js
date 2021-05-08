export const connectedWallet = async () => {
    if (window.ethereum) { //check if Metamask is installed
        try {
            //Connecting to metamask
            const address = await window.ethereum.enable();
            const obj = {
                connectedStatus: true,
                status: "",
                address: address
            }
            return obj;

        } catch (error) {
            return {
                connectedStatus: false,
                status: "🦊 Connect to Metamask using the button on the top right."
            }
        }
    } else {
        return {
            connectedStatus: false,
            status: "🦊 You must install Metamask into your browser: https://metamask.io/download.html"
        }
    }
}