
const TopDeal = ({deals}) => {
    const {img, username, email, amount} = deals
    return (
        <div className="flex gap-2 items-center">
            <img src={img} className="rounded-full w-8 h-8"/>
            <div>
                <h6>{username}</h6>
                <p className="text-sm">{email}</p>
            </div>
            <h5 className="">$ {amount}</h5>
        </div>
    );
};

export default TopDeal;