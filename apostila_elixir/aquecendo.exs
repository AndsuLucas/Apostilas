#defmodule ?
defmodule M do
	def main do
		#comando de entrada gurdando em uma variavel e removendo espaços
		name = IO.gets("What is your name?") |> String.trim

		#inserindo variaveis em strings
		IO.puts ("Hello #{name}")

		data_stuff_numbers();
		data_stuff_strings();
			
	end	

	#um pedaço do módulo ?
	def data_stuff_numbers do
		#numeros inteiros
		my_int = 123
		#numeros flutuantes
		my_float = 1.3
		#numeros atômico -> representação igual o valor
		my_atom = :atom
		IO.puts "Integer? -> #{is_integer(my_int)}"	
		IO.puts "Float? -> #{is_float(my_float)}"
		IO.puts "Atom? -> #{is_atom(my_atom)}"
	end
	def data_stuff_strings do 
		my_str = "Hello World !"
		#tamanho da string
		IO.puts "Length: #{String.length(my_str)}"

		#concatenação de strings
		concat = "Concat this with" <> " " <> my_str

		IO.puts (concat)

		#ver se contem alguma letra na string
		string = "Existe algum numero1 aqui ?";
		IO.puts "1 ? #{String.contains?(string, "1")}"

		


	end

end


