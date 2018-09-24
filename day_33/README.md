### Printing hello in assemble

* in mac
```bash
brew install qemu nasm
nasm -f bin boot_sect.asm -o bootsect.bin
emu-system-x86_64 bootsect.bin
}
```
