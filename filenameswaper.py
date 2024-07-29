import os
import tkinter as tk
from tkinter import filedialog, messagebox

def rename_images_in_subdirectories(directory):
    # Extensões de arquivos de imagem a serem renomeados
    image_extensions = ('.jpg', '.jpeg', '.png', '.gif', '.bmp', '.tiff')
    
    # Loop através das subpastas no diretório
    for root, _, files in os.walk(directory):
        folder_name = os.path.basename(root)
        for filename in files:
            if filename.lower().endswith(image_extensions):
                old_file = os.path.join(root, filename)
                new_name = f"{folder_name}_{filename}"
                new_file = os.path.join(root, new_name)

                # Renomear o arquivo
                os.rename(old_file, new_file)
                print(f"Renomeado: {old_file} -> {new_file}")

def select_directory():
    # Defina aqui o diretório inicial
    initial_directory = "/home/yuri/projects/wap/filenameswaper.py"
    directory = filedialog.askdirectory(initialdir=initial_directory)
    if directory:
        rename_images_in_subdirectories(directory)
        messagebox.showinfo("Concluído", "Os arquivos foram renomeados com sucesso!")
    else:
        messagebox.showwarning("Aviso", "Nenhum diretório selecionado.")

# Criar a interface gráfica
root = tk.Tk()
root.title("Renomear Imagens nas Subpastas")

# Criar um botão para selecionar a pasta
select_button = tk.Button(root, text="Selecionar Pasta", command=select_directory)
select_button.pack(pady=20)

# Iniciar o loop da interface gráfica
root.mainloop()
