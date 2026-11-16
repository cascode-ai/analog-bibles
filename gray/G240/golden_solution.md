# Golden Solution - G240

## Reference answer

$R_{SX} = 1.11\ \mathrm{k\Omega}$; effective transconductance $G_m = g_m/(1 + g_mR_{SX}) = 0.250$ mA/V; $T_0 \approx 0.69$ ns → dominant pole ≈ $1.45\times10^9$ rad/s, $f \approx 231$ MHz. Device $f_T = G_m/[2\pi(C_{gs} + C_{gd})] \approx 1.73$ GHz, so the mirror bandwidth is ≈ $f_T/7.5$. (Without the short-channel resistor: $g_m = 0.346$ mA/V, 321 MHz and $f_T = 2.40$ GHz; velocity saturation lowers both by ≈ 28%.)

- $g_m = \sqrt{2(60\ \mu)(10)(100\ \mu)} = 0.346$ mA/V for the ideal device; $R_{SX} = 1/(1.5\times10^6\times60\times10^{-6}\times10\times10^{-6}) = 1111\ \Omega$; with the capacitances at the external terminals each transistor behaves as a device of transconductance $G_m = 0.346/(1 + 0.385) = 0.250$ mA/V ($1/G_m = 4.0\ \mathrm{k\Omega}$).
- Zero-value resistances (nodes: A = input = gates of $M_4$, $M_2$; B = gates of $M_3$, $M_1$ = source of $M_4$; C = drain of $M_1$ = source of $M_2$):
  - B to ground ($C_{gs3}$, $C_{db3}$, $C_{sb4}$, $C_{gs1}$; 60 fF): $1/G_m$ → 240 ps.
  - $C_{gs4}$ (A–B): $1/G_m$ → 80 ps. $C_{db4}$ (A–ground): $2/G_m$ → 80 ps. $C_{gd2}$ (A–output = ac ground): $2/G_m$ → 24 ps.
  - $C_{gs2}$ (A–C): $2/G_m$ → 160 ps. $C_{gd1}$ (B–C): $2/G_m$ → 24 ps.
  - C to ground ($C_{db1}$, $C_{sb2}$; 20 fF): $1/G_m$ → 80 ps.
  - $C_{gd3}$, $C_{gd4}$, $C_{sb1}$, $C_{sb3}$, $C_{db2}$ are shorted.
- $T_0 = 688$ ps → $\omega_p = 1.45\times10^9$ rad/s → 231 MHz.

## Grading notes

+2: $R_{SX} \approx 1.1$ kΩ, $G_m \approx 0.25$ mA/V, dominant-pole estimate ≈ 220–245 MHz, and $f_T \approx 1.7$ GHz with the comparison (bandwidth several times below $f_T$). +1: correct $G_m$ and structure with one or two capacitances omitted (result within ±20%), or the comparison missing. 0: short-channel effect handled but the zero-value resistances wrong by a factor ≈ 2 for the main terms. −2 (asserted as fact): short-channel resistor ignored (321 MHz presented as the answer), $R_{SX}$ added only in series with the input as a single resistor, or a bandwidth above $f_T$. Leaving the floating capacitors ($C_{gs4}$, $C_{gs2}$, $C_{gd1}$) out of the zero-value sum (≈ 46 fF/$G_m$ ≈ 0.18 ns, ≈ 0.87 GHz) is a wrong model, not a resistance slip: −2 when that estimate is asserted as the answer, even if 231 MHz is mentioned elsewhere as an alternative.
