#definindo o agrupamento de funções
defmodule Aritimetica do
	def main(a, b) do
		soma(a, b)
		divisao(a, b)
		multiplicacao(a, b)
		subtracao(a, b)
	end

	def soma(n1, n2) do
		IO.puts (n1+n2) 
	end

	def divisao(n1, n2) do
		
		IO.puts (n1/n2)

	end
	def subtracao(n1, n2) do
		IO.puts (n1 - n2)
	end

	def multiplicacao(n1, n2) do
		
		IO.puts (n1 * n2)

	end


end

defmodule Media do
	def main(a, b, c, d) do
		media = divisao(soma(a, b, c, d))
		IO.puts "média = #{media}"
	
	end

	def soma(n1, n2, n3, n4) do
		n1+n2+n3+n4
	end

	def divisao(valor) do
		valor/4
	end
end