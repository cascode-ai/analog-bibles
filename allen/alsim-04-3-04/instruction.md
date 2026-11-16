Calculate the output resistance and the minimum output voltage, while maintaining all devices in saturation, for the circuit shown in [Fig. 1] (an n-channel cascode current mirror: M3 and M4 diode-connected in the input branch fed by 10 µA, M1 and M2 in the output branch; all four transistors $W/L$ = 5 µm/1 µm). Assume that $i_{OUT}$ is actually 10 µA. Simulate this circuit using the SPICE LEVEL-3 model below and determine the actual output current $i_{OUT}$ and the small-signal output resistance $r_{OUT}$.

Hand-calculation model (n-channel): $V_{T0}$ = 0.7 V, $K'$ = 110 µA/V², γ = 0.4 V^½, $2|\phi_F|$ = 0.7 V, λ = 0.04 V⁻¹ (for $L = 1\ \mu$m); in saturation $i_D = \frac{K'W}{2L}(v_{GS} - V_T)^2(1 + \lambda v_{DS})$.

LEVEL-3 n-channel model: VTO = 0.7, UO = 660, DELTA = 2.4, ETA = 0.1, KAPPA = 0.15, THETA = 0.1, NSUB = 3E16, TOX = 140E-10, XJ = 0.2U, LD = 0.016U, NFS = 7E11, CGSO = 220P, CGDO = 220P, CGBO = 700P, CJ = 770U, CJSW = 380P, MJ = 0.5, MJSW = 0.38.
