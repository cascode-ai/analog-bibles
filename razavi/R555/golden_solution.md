# Golden Solution - R555

## Reference answer

Yes.
1. Input side (lower input-common-mode limit): the OTA inputs sit at $V_X \approx V_Y \approx |V_{BE1}|$, so $V_{GS,a} + V_{DS,ISS(min)} \le |V_{BE1}|$. This does not involve $V_{DD}$ but is a hard constraint. With $V_{TH,n} = 0.7$ V and $|V_{BE1}| \approx 0.7$–0.8 V there is almost no room (low-threshold or subthreshold input devices are needed), and it gets worse at high temperature because $|V_{BE}|$ falls by ≈ 1.5–2 mV/K.
2. Load/output side (upper limit): $M_b$ stays saturated only if $V_P = V_{DD} - |V_{GS,d}| \ge V_Y - V_{TH,n}$. $M_a$, whose drain is the OTA output at $V_{DD} - |V_{GS3}|$, needs $V_{DD} - |V_{GS3}| \ge V_X - V_{TH,n}$. Hence $V_{DD} \ge |V_{BE1}| + |V_{GS,P}| - V_{TH,n} = |V_{BE1}| + |V_{ov,P}| + (|V_{TH,p}| - V_{TH,n})$, about 0.95–1.1 V with these thresholds and small overdrives, versus ≈ 0.8 V for the core alone.
3. Overall stack of the OTA: $V_{DD} \ge |V_{GS,c}| + V_{DS,a} + V_{DS,ISS}$.
So the OTA raises the minimum supply by roughly $|V_{GS,P}| - V_{TH,n} - |V_{DS3}|$ (small only if $V_{TH,n} \approx |V_{TH,p}|$ and the overdrives are small), and its input stage must fit within $|V_{BE1}|$.

## Grading notes

+2: answers yes and gives both constraints: the input-side condition $V_{GS,in} + V_{DS,ISS} \le |V_{BE1}|$, and the supply condition from the PMOS load/output level ($V_{DD} \ge |V_{BE1}| + |V_{GS,P}| - V_{TH,n}$ or equivalent), compared with the core's own requirement. Numerical estimates are optional. +1: yes with one of the two constraints correctly derived. 0: yes with only a generic headroom statement (e.g., "the OTA needs a few overdrives"). -2 (asserted as fact): no additional constraints, or constraints with the wrong direction (e.g., requiring the input common-mode level to exceed $V_{DD} - |V_{TH,p}|$). Swapping which of $M_c$/$M_d$ is diode-connected (i.e., which input-device drain is the OTA output) changes neither constraint because $V_X = V_Y$: treat it as a minor misreading (at most +1), not −2.
