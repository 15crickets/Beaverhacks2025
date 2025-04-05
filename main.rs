use std::io::Write;

fn main() {
    let mut stdout = std::io::stdout();
    if let Err(e) = writeln!(stdout, "Hello World!") {
        eprintln!("Failed to write to stdout: {}", e);
    }
}
