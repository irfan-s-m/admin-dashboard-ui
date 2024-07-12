import { topDealUsers } from '../../../utils/data.js';
import TopDeal from './TopDeal.jsx';

const TopDeals = () => {
    return (
        <div>
            <h1 className='text-3xl'>Top deals</h1>
            <div className='mt-4 grid gap-6'>
                {
                    topDealUsers.map(deals =><TopDeal key={deals.id} deals={deals}></TopDeal>)
                }
            </div>
        </div>
    );
};

export default TopDeals;