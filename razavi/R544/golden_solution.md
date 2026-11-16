# Golden Solution - R544

## Reference answer

$|V_{GS1}| - |V_{TH2}| \le RI_{REF} \le |V_{TH1}|$.
Without body effect this is $V_{ov1} \le RI_{REF} \le |V_{TH}|$ (≈ 0.8 V), with $V_{ov1} = \sqrt{2I_{REF}/(\mu_pC_{ox}(W/L)_1)}$. With body effect ($M_1$'s source is $|V_{DS2}|$ below $V_{DD}$), $|V_{TH1}| = 0.8 + 0.4(\sqrt{0.8 + |V_{DS2}|} - \sqrt{0.8})$ V > $|V_{TH2}| = 0.8$ V. The lower bound becomes $V_{ov1} + (|V_{TH1}| - |V_{TH2}|)$ and the upper bound $|V_{TH1}|$.

Derivation (D = drain of $M_1$ = gate of $M_2$, E = bottom of $R$ = gate of $M_1$, $V_E = V_D - RI_{REF}$, S = drain of $M_2$ = source of $M_1$):
- $M_1$: $|V_{GS1}| = V_S - V_E = |V_{DS1}| + RI_{REF}$. Saturation $|V_{DS1}| \ge |V_{GS1}| - |V_{TH1}|$ gives $RI_{REF} \le |V_{TH1}|$.
- $M_2$: $|V_{GS2}| = V_{DD} - V_D$, $|V_{DS2}| = V_{DD} - V_S$. Saturation gives $V_S - V_D \le |V_{TH2}|$. Since $V_S - V_D = |V_{DS1}| = |V_{GS1}| - RI_{REF}$, this means $RI_{REF} \ge |V_{GS1}| - |V_{TH2}|$.
- So $R$ must drop at least the overdrive of $M_1$ (to give $M_2$ enough $|V_{DS}|$) but less than a threshold (to keep $M_1$ saturated).

## Grading notes

+2: both bounds with correct derivation: maximum $RI_{REF} = |V_{TH1}|$ and minimum $RI_{REF} = |V_{GS1}| - |V_{TH2}|$ (= $V_{ov1}$ plus the body-effect increase of $|V_{TH1}|$). An answer using a single $|V_{TH}|$ that explicitly notes the body effect of $M_1$ also earns +2. +1: $V_{ov1} \le RI_{REF} \le |V_{TH}|$ with the body effect ignored without comment, or one bound right and the other off by a minor slip. 0: only one bound correct. -2 (asserted as fact): bounds swapped, gate connections misread (e.g., the gate of $M_1$ at the drain of $M_1$), or bounds such as $RI_{REF} \le V_{ov}$ or $\ge |V_{TH}|$.
