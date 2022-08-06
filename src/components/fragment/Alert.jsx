import React from "react";
import { Alert, AlertIcon } from "@chakra-ui/react";

export default function AlertNotification(status, message) {
    if (status === "success") {
        return (
            <Alert status={status}>
                <AlertIcon />
                {message}
            </Alert>
        );
    } else if (status === "error") {
        return (
            <Alert status={status}>
                <AlertIcon />
                {message}
            </Alert>
        );
    }
}
