def reverse(x)
    numbers = x.to_s.split('')
    answer = nil
    
    if x.bit_length >= 32
        return 0
    elsif numbers[0] == '-'
        reversed = numbers[1..-1].reverse.join
        answer = (numbers[0] + reversed).to_i
    else
        answer = numbers.reverse.join.to_i
    end
    
    if answer.bit_length >= 32
        return 0
    else
        return answer
    end
end