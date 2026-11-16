An $N$-bit DAC consists of a voltage scaling DAC of $M$ bits (a string of $2^M$ equal resistors) and a charge scaling DAC of $K$ bits (binary-weighted capacitors), $N = M + K$. The accuracy of the resistors in the $M$-bit voltage scaling DAC is $\pm\Delta R/R$. The accuracy of the binary-weighted capacitors in the charge scaling DAC is $\Delta C/C$. Assume that INL and DNL can be expressed generally as

INL = (accuracy of component) × (maximum weighting factor)
DNL = (accuracy of the largest component) × (corresponding weighting factor)

where the weighting factor for the $i$th bit is $2^{N-i-1}$ LSBs ($i = 0$ is the MSB of the $N$-bit DAC), and that the INL and DNL contributions of the two subDACs add. If the MSB bits use the $M$-bit voltage scaling DAC and the LSB bits use the $K$-bit charge scaling DAC, express the INL and DNL of the $N$-bit DAC (in LSBs of the $N$-bit DAC) in terms of $M$, $K$, $N$, $\Delta R/R$ and $\Delta C/C$.
