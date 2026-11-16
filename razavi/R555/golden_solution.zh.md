是的。
1. 输入侧，即输入共模电平（common-mode level）的下限：OTA 的输入端位于 $V_X \approx V_Y \approx |V_{BE1}|$，所以 $V_{GS,a} + V_{DS,ISS(min)} \le |V_{BE1}|$。这一条件不涉及 $V_{DD}$，却是一个硬性约束。取 $V_{TH,n} = 0.7$ V、$|V_{BE1}| \approx 0.7$–0.8 V 时几乎没有余地，需要采用低阈值或工作在亚阈值（subthreshold）区的输入器件；而且在高温下情况更糟，因为 $|V_{BE}|$ 以 ≈ 1.5–2 mV/K 的速率下降。
2. 负载/输出侧（上限）：只有当 $V_P = V_{DD} - |V_{GS,d}| \ge V_Y - V_{TH,n}$ 时 $M_b$ 才保持饱和。$M_a$ 的漏极就是 OTA 的输出端，位于 $V_{DD} - |V_{GS3}|$，它要求 $V_{DD} - |V_{GS3}| \ge V_X - V_{TH,n}$。因此 $V_{DD} \ge |V_{BE1}| + |V_{GS,P}| - V_{TH,n} = |V_{BE1}| + |V_{ov,P}| + (|V_{TH,p}| - V_{TH,n})$，在上述阈值和较小的过驱动电压（overdrive voltage）下约为 0.95–1.1 V，而单独的核心电路只需 ≈ 0.8 V。
3. OTA 的整体堆叠：$V_{DD} \ge |V_{GS,c}| + V_{DS,a} + V_{DS,ISS}$。
因此 OTA 使最低电源电压提高约 $|V_{GS,P}| - V_{TH,n} - |V_{DS3}|$（只有当 $V_{TH,n} \approx |V_{TH,p}|$ 且过驱动电压较小时这一增量才较小），并且其输入级必须放在 $|V_{BE1}|$ 之内。
