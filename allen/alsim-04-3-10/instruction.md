(Design problem, self-graded.) You are to design a CMOS current sink using only a 5-V power supply and MOSFETs that will attempt to minimize $V_{MIN}$ and $\Delta I_o$ as illustrated in [Fig. 1]. $\Delta I_o$ is arithmetically centered about $I_o$, which is 100 µA. Ignore bulk effects and keep the $W/L$ ratios between 1 and 100.

$V_{MIN}$ and $\Delta I_o$ are determined by simulating your design once using the HIGH model parameters and once using the LOW model parameters. These two simulations are to be plotted as $i_{OUT}$ versus $v_{OUT}$ as shown in [Fig. 1]. $V_{MIN}$ is the horizontal distance from the origin to where the line AB intersects the right-most I–V curve. $\Delta I_o$ is the biggest vertical difference between the two simulations from $V_{MIN}$ to 5 V.

The PMOS and NMOS model parameters are:

| Model | $K'$ (µA/V²) | $V_{T0}$ (V) | λ (V⁻¹) |
|---|---|---|---|
| NMOS (HIGH) | 26.4 | 0.675 | 0.011 |
| NMOS (LOW) | 21.6 | 0.825 | 0.009 |
| PMOS (HIGH) | 8.8 | −0.675 | 0.022 |
| PMOS (LOW) | 7.2 | −0.875 | 0.018 |

Your score for this problem is SCORE = min(5 V/$V_{MIN}$, 25) + min(500 µA/$\Delta I_o$, 25). The values entered in the SCORE formula must come from computer simulation. Provide the supporting information needed to verify how you determined the value of your SCORE, along with a labeled schematic of your circuit.
