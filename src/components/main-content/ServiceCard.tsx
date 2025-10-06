'use client'

import React from "react";

interface ServiceCardProps {
    title: string;
    items: string[];
}

export default function ServiceCard({ title, items }: ServiceCardProps) {
    return (
            <div className="bg-transparent rounded-2xl p-6">
                <h3 className="text-xl font-semibold mb-4">{title}</h3>
                <ul className="space-y-2 text-gray-700">
                    {items.map((item, index) => (
                            <li key={index} className="flex items-start">
                                {item}
                            </li>
                    ))}
                </ul>
            </div>
    );
}