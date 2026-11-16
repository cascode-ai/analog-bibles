# Golden Solution - R387

## Reference answer

$I_{D1} = I_{D2} \approx 0.44$ mA (0.437 mA), giving $g_{m1} \approx 3.42$ mS, $g_{m2} \approx 4.84$ mS and a loop gain $g_{m2}R_D/2 \approx 4.84$.

- $M_1$ and $M_2$ are in series and carry the same current $I$.
- Without feedback the input resistance (at the source of $M_1$) is $1/g_{m1}$. The divider returns $V_P = V_{out}C_1/(C_1+C_2) = V_{out}/2$ to the gate of $M_2$, whose current adds to the input current: $R_{in} = \dfrac{1}{g_{m1}}\cdot\dfrac{1}{1 + g_{m2}R_DC_1/(C_1+C_2)} = \dfrac{1}{g_{m1}(1 + g_{m2}\cdot 1\ \mathrm{k\Omega})}$.
- $g_{m1} = \sqrt{2(134\ \mu)(100)I} = 0.1637\sqrt{I}$, $g_{m2} = \sqrt{2(134\ \mu)(200)I} = 0.2315\sqrt{I}$ (SI units). With $x = \sqrt{I}$: $0.1637x(1 + 231.5x) = 0.02$ → $x = 0.0209$, $I = 0.437$ mA.
- Check: $1/g_{m1} = 292\ \Omega$, divided by $1 + 4.84 = 5.84$ → 50 Ω. Overdrives 0.26 V ($M_1$) and 0.18 V ($M_2$).

## Grading notes

+2: $I \approx 0.44$ mA (±5%) for both devices, from $R_{in} = 1/[g_{m1}(1 + g_{m2}R_D/2)]$. +1: the right equation with an arithmetic slip (result within ±15%), or the same-current argument missing but the number right. 0: correct structure of $R_{in}$ but a numerical error larger than 15%. -2 (asserted as fact): the open-loop result $1/g_{m1} = 50\ \Omega$ (I ≈ 15 mA), the divider factor 1/2 dropped (I ≈ 0.23 mA), feedback claimed to raise $R_{in}$, or different currents assigned to $M_1$ and $M_2$.
