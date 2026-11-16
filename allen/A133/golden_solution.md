# Golden Solution - A133

## Reference answer

Active-load inverter ≈ 4546 µm², current-source load inverter ≈ 4.7 µm², push–pull inverter ≈ 2.55 µm² (roughly 1800 : 1.8 : 1).

- Active load: $|A_v| \approx g_{m1}/g_{m2} = \sqrt{K'_N(W/L)_1/(K'_P(W/L)_2)} = 100$, so $(W/L)_1 = 10^4 \cdot 50/110 = 4545$, $W_1 = 4545\ \mu$m, area ≈ 4545 + 1 = 4546 µm². Including $g_{ds1} + g_{ds2} = 0.9\ \mu$S in the denominator raises it to ≈ 4808 µm². Such a device would have only ≈ 6 mV of overdrive, i.e. it would really be in weak inversion. The diode load cannot give high gain economically.
- Current-source load: $g_{m1} = 100(g_{ds1} + g_{ds2}) = 100 \cdot 0.9\ \mu\mathrm{S} = 90\ \mu$S, so $(W/L)_1 = g_{m1}^2/(2K'_N I_D) = 8.1\times10^{-9}/2.2\times10^{-9} = 3.68$, area ≈ 3.68 + 1 = 4.68 µm².
- Push–pull: $g_{m1} + g_{m2} = 90\ \mu$S with $g_{m2} = \sqrt{2 \cdot 50\ \mu \cdot 1 \cdot 10\ \mu} = 31.6\ \mu$S, so $g_{m1} = 58.4\ \mu$S and $(W/L)_1 = 1.55$, area ≈ 1.55 + 1 = 2.55 µm².

## Grading notes

+2: all three areas within ±5 % (active load 4500–4850 µm², current-source 4.4–4.9 µm², push–pull 2.4–2.7 µm²) with the right gain expression for each. +1: two right and one off by a slip. 0: only one configuration right. −2 (asserted as fact): the diode-load gain taken as $g_{m1}/(g_{ds1}+g_{ds2})$, the push–pull treated like the current-source inverter (missing $g_{m2}$), or areas computed for W/L of the PMOS rather than the NMOS.
