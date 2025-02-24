"use client";

import React, { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ConfigProvider } from "antd";

const queryClient = new QueryClient();

type ClientProvidersProps = {
    children: ReactNode;
};

const ClientProviders = ({ children }: ClientProvidersProps) => {
    return (
        <QueryClientProvider client={queryClient}>
            <ConfigProvider
                theme={{
                    token: {
                        colorText: "",
                        fontFamily: '"Discgent", "sans-serif"',
                    },
                }}
            >
                {children}
            </ConfigProvider>
        </QueryClientProvider>
    );
};

export default ClientProviders;
