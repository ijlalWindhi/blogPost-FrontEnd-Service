import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    ModalFooter,
    Button,
    Text,
    Center,
    Image,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { clearLocalStorage } from "../../../../utils/constants";

import ImageLogout from "../../../../assets/image/image-hero.png";

export default function ModalLogout({ isOpen, onOpen, onClose }) {
    const navigate = useNavigate();

    const _handleLogout = () => {
        clearLocalStorage();
        navigate("/");
        location.reload();
    };

    return (
        <Modal
            size="sm"
            isOpen={isOpen}
            onClose={onClose}
            blockScrollOnMount={false}
            isCentered
        >
            <ModalOverlay />
            <ModalContent borderRadius="3xl" py={[2, 8]}>
                <ModalBody alignItems="center" textAlign="center">
                    <Center>
                        <Image
                            src={ImageLogout}
                            alt="image logout"
                            w={{ base: "40", md: "auto" }}
                        />
                    </Center>
                    <Text as="h3" fontSize={[18, 23]} fontWeight={600}>
                        Logout Account
                    </Text>
                    <Text as="h6" fontSize={[12, 16]} fontWeight={400}>
                        Are you sure to log out of this account?
                    </Text>
                </ModalBody>
                <ModalFooter justifyContent="center">
                    <Button
                        variant="outline"
                        px="10%"
                        colorScheme="blue"
                        mr={3}
                        onClick={onClose}
                        borderRadius="full"
                    >
                        Cancle
                    </Button>
                    <Button
                        px="10%"
                        borderRadius="full"
                        colorScheme="blue"
                        shadow="0 0 20px rgba(0, 0, 231, 20%)"
                        onClick={() => _handleLogout()}
                    >
                        Logout
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}
