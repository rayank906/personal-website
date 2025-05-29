export const Footer = () => {
    return <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap justify-between items-center">
        {" "}
        <p className="text-sm text-muted-foreground">
          Made by Rayan Kamdem &copy; {new Date().getFullYear()} All rights reserved. 
        </p>
    </footer>
}