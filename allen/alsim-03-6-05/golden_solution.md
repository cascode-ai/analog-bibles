# Golden Solution - alsim-03-6-05

## Reference answer

Input file:
```
PMOS output characteristics
M1 2 1 0 0 MOSP W=5U L=1U
VDS 2 0 DC 0
VGS 1 0 DC 0
.MODEL MOSP PMOS VTO=-0.7 KP=50U GAMMA=0.57 LAMBDA=0.05 PHI=0.8
.DC VDS 0 -5 -0.2 VGS -1 -5 -1
.PRINT DC V(2) I(VDS)
.END
```
Expected (level 1, $K'W/(2L)$ = 125 µA/V²): the drain current flows out of the drain (negative $i_D$); in saturation $|i_D| = 125\ \mu\mathrm{A/V^2}(|v_{GS}| - 0.7)^2(1 + 0.05|v_{DS}|)$ beyond knees at $|v_{DS}|$ = 0.3, 1.3, 2.3, 3.3, 4.3 V.
- At $|v_{DS}|$ = 5 V: 14.1 µA, 264 µA, 827 µA, 1.70 mA and 2.89 mA for $v_{GS}$ = −1 … −5 V.
- At $|v_{DS}|$ = 2 V: 12.4 µA, 232 µA, 715 µA, 1.27 mA, 1.82 mA.
- Compared with the n-channel device of the same size (≈ 6.1 mA at $v_{GS} = v_{DS}$ = 5 V), the currents are about 0.47 times as large, set by $K'_P/K'_N$ = 50/110 and the larger λ.

## Grading notes

A correct simulation shows five curves with knees at $|v_{DS}|$ ≈ 0.3, 1.3, 2.3, 3.3, 4.3 V and current magnitudes at $|v_{DS}|$ = 5 V of ≈ 14 µA, 264 µA, 0.83 mA, 1.70 mA and 2.89 mA (±3%), with the correct negative polarities of $v_{GS}$, $v_{DS}$ and $i_D$ for the p-channel device. Positive gate–source voltages (device off, zero current), a $v_{DS}$ sweep from 0 to +5 V, or currents equal to n-channel values are wrong.
