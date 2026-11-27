# Golden Solution - R064

## Reference answer

Using the given channel-length modulation coefficients in the small-signal output resistances gives the following gains. The bias and transconductances use the saturation square law without the channel-length modulation factor.

| Diode-connected load | With $r_{O1}$ and $r_{O2}$ | With $\lambda=0$ |
|---|---:|---:|
| NMOS, including body effect | −1.85 V/V | −1.95 V/V |
| PMOS | −3.57 V/V | −4.18 V/V |

For both circuits, $g_{m1}\approx3.66\ \mathrm{mS}$ and $r_{Oi}\approx1/(\lambda_i I_D)$. The gain is
$$A_v=-\frac{g_{m1}}{g_{m2}+g_{mb2}+1/r_{O1}+1/r_{O2}}.$$

- NMOS load. $V_{SB2}=V_{out}\approx1.43\ \mathrm{V}$, $g_{m2}\approx1.64\ \mathrm{mS}$, and $g_{mb2}\approx0.241\ \mathrm{mS}$. Both output resistances are $20\ \mathrm{k}\Omega$.
- PMOS load. The source and bulk are both at $V_{DD}$, so the body-effect term is zero. $V_{out}\approx1.06\ \mathrm{V}$, $g_{m2}\approx0.876\ \mathrm{mS}$, and $r_{O2}\approx10\ \mathrm{k}\Omega$. Both bias voltages exceed $M_1$'s saturation boundary of $V_{ov1}\approx0.273\ \mathrm{V}$.

## Grading notes

The two parts have equal weight. Accept either stated $\lambda$ convention with a ±4% tolerance for each gain.

- +2 for the correct NMOS gain including body effect (−1.95 or −1.85 with $r_O$) and the correct PMOS gain (−4.18 or −3.57 with $r_O$).
- +1 for a correct PMOS part with NMOS body effect omitted (−2.24 or −2.11 with $r_O$), or for one arithmetic slip.
- 0 for one correct gain and one incorrect gain. A model error confined to the PMOS part, such as using $\mu_n C_{ox}$ (giving −2.24 with $\lambda=0$) or attributing body effect to that load, receives 0 if the NMOS part is correct.
- −2 when a positive gain is asserted as fact or when both gains use the ratio without taking its square root (−5 for the NMOS load and approximately −17.4 for the PMOS load).
