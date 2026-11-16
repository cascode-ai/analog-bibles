You are to design a CMOS differential gain block with a single-ended output, using ±5 V power supplies and only MOSFETs, that will optimize the following scoring formula over a temperature range from 0 °C to 55 °C. W/L values should be between 1 and 100.

$\mathrm{SCORE} = \min(\mathrm{ICMR}, 10) + \dfrac{10}{|10 - \text{Voltage gain}| + 1} + \min\!\left(\dfrac{f_{-3\,\mathrm{dB}}}{1\ \mathrm{MHz}}, 10\right) + \dfrac{10}{\max(P_{diss}, 1\ \mathrm{mW})} \le 40$

(ICMR in volts, $P_{diss}$ in mW.) You must simulate your design with SPICE at 0 °C and at 55 °C using the model parameters below. In addition, you must connect a 1 pF capacitor from every node to ground, and you must not let SPICE add the inherent capacitances of the MOSFETs.

| T = 27 °C | K′ (µA/V²) | V_T (V) | λ (V⁻¹) | γ (V^1/2) | φ (V) |
|---|---|---|---|---|---|
| NMOS | 25 | 0.75 | 0.01 | 0.8 | 0.6 |
| PMOS | 10 | −0.75 | 0.02 | 0.4 | 0.6 |

From your simulations (give the simulator input files and the relevant output), fill out the following table for 0 °C and 55 °C: $V_{IC}(\max)$, $V_{IC}(\min)$, minimum ICMR, voltage gain, maximum gain deviation, minimum $f_{-3\,\mathrm{dB}}$ (Hz), and $P_{diss}$. The minimum ICMR is determined by the difference between the lowest $V_{IC}(\max)$ and the highest $V_{IC}(\min)$. The maximum gain deviation is the largest deviation from the nominal gain of 10. The minimum $f_{-3\,\mathrm{dB}}$ is the lowest $f_{-3\,\mathrm{dB}}$ at either temperature. $P_{diss}$ is the largest total power dissipation at either temperature. The values entered in the SCORE formula must come from simulation. Provide the supporting information needed to verify how you determined your SCORE, along with a labelled schematic of your circuit.
