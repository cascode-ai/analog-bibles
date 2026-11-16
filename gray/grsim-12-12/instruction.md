Use the fully differential two-stage op amp in [Fig. 1] (PMOS input pair $M_1$–$M_2$ with tail $M_5$, whose gate is the CMC input; NMOS loads $M_3$–$M_4$; second stages $M_6$/$M_7$ and $M_9$/$M_{10}$) with the CMFB scheme in [Fig. 2]. The scheme has NMOS source followers on each output feeding two equal resistors $R_{cs} = 15$ kΩ, and an identical follower on $V_{CM}$; the CM-sense amplifier compares the two and drives $V_{cmc}$. The source followers have a low-frequency gain of 0.95.

For the CM-sense amplifier, use the complement of the amplifier in [Fig. 3]: an NMOS source-coupled pair $M_{21}$–$M_{22}$ with an NMOS tail current source $M_{25}$ to $-V_{SS}$, and diode-connected PMOS loads $M_{23}$, $M_{24}$ to $V_{DD}$. Modify it to give a negative dc gain.

Op-amp data: $V_{DD} = V_{SS} = 1.65$ V; process $\mu_nC_{ox} = 194\ \mu\text{A/V}^2$, $\mu_pC_{ox} = 64.7\ \mu\text{A/V}^2$, $V_{tn} = 0.6$ V, $V_{tp} = -0.8$ V; $(W/L)_{1,2} = 77$, $(W/L)_{3,4} = 4$, $(W/L)_5 = 25$, $(W/L)_{6,9} = 16$, $(W/L)_{7,10} = 50$ (drawn $L = 1\ \mu$m); $|I_{D1}| = |I_{D2}| = 100\ \mu$A, $|I_{D5}| = 200\ \mu$A ($|V_{ov5}| = 0.5$ V), $I_{D6} = I_{D9} = 400\ \mu$A, $V_{ov6} = |V_{ov7}| = 0.5$ V; Miller capacitors $C = 1.39$ pF.

(a) Design the CM-sense amplifier so that the total low-frequency CM-sense gain $a_{cms0} = v_{cms}/v_{oc} = -0.71$.

(b) With this CMFB circuit, what are the swing limits for each op-amp output voltage ($V_{o1}$ and $V_{o2}$)? Assume that the biasing current source in each source follower is implemented with an NMOS transistor, and the current-source and source-follower transistors operate with $V_{GS} = 0.8$ V and $V_{ov} = 0.2$ V. For simplicity, assume $V_{GS}$ is constant and take $\gamma = 0$.

(c) What value of $V_{CM}$ gives the largest symmetric output swing?

(d) Verify that this CMFB circuit works correctly by running a SPICE simulation. Use the value of $V_{CM}$ from part (c).
