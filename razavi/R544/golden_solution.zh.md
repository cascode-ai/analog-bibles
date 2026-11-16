$|V_{GS1}| - |V_{TH2}| \le RI_{REF} \le |V_{TH1}|$。
不计体效应（body effect）时为 $V_{ov1} \le RI_{REF} \le |V_{TH}|$（≈ 0.8 V），其中 $V_{ov1} = \sqrt{2I_{REF}/(\mu_pC_{ox}(W/L)_1)}$。计入体效应时（$M_1$ 的源极比 $V_{DD}$ 低 $|V_{DS2}|$），$|V_{TH1}| = 0.8 + 0.4(\sqrt{0.8 + |V_{DS2}|} - \sqrt{0.8})$ V > $|V_{TH2}| = 0.8$ V。下界变为 $V_{ov1} + (|V_{TH1}| - |V_{TH2}|)$，上界变为 $|V_{TH1}|$。

推导（D = $M_1$ 的漏极 = $M_2$ 的栅极，E = $R$ 的下端 = $M_1$ 的栅极，$V_E = V_D - RI_{REF}$，S = $M_2$ 的漏极 = $M_1$ 的源极）：
- $M_1$：$|V_{GS1}| = V_S - V_E = |V_{DS1}| + RI_{REF}$。饱和条件 $|V_{DS1}| \ge |V_{GS1}| - |V_{TH1}|$ 给出 $RI_{REF} \le |V_{TH1}|$。
- $M_2$：$|V_{GS2}| = V_{DD} - V_D$，$|V_{DS2}| = V_{DD} - V_S$。饱和条件给出 $V_S - V_D \le |V_{TH2}|$。由于 $V_S - V_D = |V_{DS1}| = |V_{GS1}| - RI_{REF}$，这意味着 $RI_{REF} \ge |V_{GS1}| - |V_{TH2}|$。
- 因此 $R$ 上的压降至少要等于 $M_1$ 的过驱动电压（overdrive voltage），以便给 $M_2$ 留出足够的 $|V_{DS}|$，但又要小于一个阈值电压，以使 $M_1$ 保持饱和。
