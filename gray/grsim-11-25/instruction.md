A MOS current source of the type shown in [Fig. 1] (a simple two-transistor current mirror, $M_1$ diode-connected) is to be designed to achieve minimum output current noise. The two transistors must be identical and the total gate area of the two transistors combined must not exceed 10 µm². Choose the W and L of the devices under two different assumptions:

(a) 1/f noise dominates.

(b) Thermal noise dominates.

Assume that $L_d$ and $X_d$ are zero, so the drawn dimensions are the effective ones. The minimum allowed transistor length or width is 0.6 µm. Model the drain thermal noise as $4kT\frac{2}{3}g_m$ and the flicker noise as a gate-referred generator $\overline{v^2} = K_f\Delta f/(WLC_{ox}f)$ with $K_f$ independent of bias; the input current $I_{IN}$ is fixed and its own noise is not part of the design. Verify your design using SPICE (choose a square-law NMOS model, e.g., $k' = 194\ \mu$A/V², $V_t = 0.6$ V, $t_{ox} = 80$ Å, $K_f = 3\times10^{-24}$ F·V², and an $I_{IN}$ that keeps both devices saturated).
