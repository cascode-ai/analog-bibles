Below are formulas for the INL and DNL (in LSBs) of a DAC whose MSB and LSB arrays are either voltage scaling (resistor string, accuracy $\Delta R/R$) or charge scaling (binary-weighted capacitors, accuracy $\Delta C/C$). $N = M + K$, where $M$ is the number of bits of the MSB array, $K$ is the number of bits of the LSB array, and $N$ is the total number of bits.

- MSB voltage scaling ($M$ bits), LSB charge scaling ($K$ bits): $INL = 2^{N-1}\frac{\Delta R}{R} + 2^{K-1}\frac{\Delta C}{C}$, $DNL = 2^{K}\frac{\Delta R}{R} + (2^K - 1)\frac{\Delta C}{C}$.
- MSB charge scaling ($M$ bits), LSB voltage scaling ($K$ bits): $INL = 2^{K-1}\frac{\Delta R}{R} + 2^{N-1}\frac{\Delta C}{C}$, $DNL = \frac{\Delta R}{R} + (2^N - 1)\frac{\Delta C}{C}$.

Find the values of $N$, $M$ and $K$ and tell what type of DAC (voltage MSB and charge LSB, or charge MSB and voltage LSB) will satisfy the requirements, giving the largest number of bits, if $\Delta R/R = 1$% and $\Delta C/C = 0.1$% and both the INL and DNL of the DAC combination should each be 1 LSB or less.
