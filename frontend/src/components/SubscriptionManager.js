import React, { useState } from 'react';

const plans = [
  { id: 'basic', name: 'Basic', price: 9.99, features: ['100 image generations', '50 video generations', 'Basic editing tools'] },
  { id: 'pro', name: 'Pro', price: 19.99, features: ['Unlimited image generations', '200 video generations', 'Advanced editing tools', 'Priority support'] },
  { id: 'enterprise', name: 'Enterprise', price: 49.99, features: ['Unlimited image and video generations', 'Custom AI model training', 'API access', 'Dedicated support'] },
];

export default function SubscriptionManager() {
  const [selectedPlan, setSelectedPlan] = useState('');

  const handleSelectPlan = (planId: string) => {
    setSelectedPlan(planId);
    // TODO: Implement subscription logic
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Subscription Manager</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {plans.map((plan) => (
          <div key={plan.id} className="border rounded-lg p-4">
            <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
            <p className="text-2xl font-bold mb-4">${plan.price}/month</p>
            <ul className="list-disc list-inside mb-4">
              {plan.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            
            </ul>
            <button
              onClick={() => handleSelectPlan(plan.id)}
              className={`w-full py-2 px-4 rounded-md ${
                selectedPlan === plan.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-800 hover:bg-blue-100'
              }`}
            >
              {selectedPlan === plan.id ? 'Selected' : 'Select Plan'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}