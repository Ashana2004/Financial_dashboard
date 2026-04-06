import React from 'react';
import { InsightCard } from './InsightCard';
import { TrendingUp, AlertCircle, ShoppingBag } from 'lucide-react';

export const InsightsSection = () => {
  return (
    <div style={{ marginBottom: '24px' }}>
      <h2 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '16px' }}>AI Insights</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px' }}>
        <InsightCard 
          icon={TrendingUp}
          title="Spending is down 12%"
          description="You've spent $450 less on dining this month compared to last month. Keep it up!"
          highlight={true}
        />
        <InsightCard 
          icon={AlertCircle}
          title="Subscription Alert"
          description="You have 3 inactive subscriptions costing $45/mo. Consider canceling."
          highlight={false}
        />
        <InsightCard 
          icon={ShoppingBag}
          title="Large Purchase Detected"
          description="Apple Inc charge of $1,200. This is 15% of your typical monthly spend."
          highlight={false}
        />
      </div>
    </div>
  );
};
