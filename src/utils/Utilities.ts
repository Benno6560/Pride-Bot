/*
 * Copyright © 2022 Ben Petrillo. All rights reserved.
 *
 * Project licensed under the MIT License: https://www.mit.edu/~amini/LICENSE.md
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE
 * OR OTHER DEALINGS IN THE SOFTWARE.
 *
 * All portions of this software are available for public use, provided that
 * credit is given to the original author(s).
 */

import {ColorResolvable} from "discord.js";
import axios from "axios";

export default class Utilities {

    public static getDefaultEmbedColor(): ColorResolvable {
        return "#fc92d9";
    }

    public static sleep(ms): Promise<any> {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    public static capitalize(string: string): string {
        let str = string.split(" ");
        for (let i = 0; i < str.length; i++) {
            const firstChar = str[i].charAt(0)
            str[i] = firstChar.toUpperCase() + str[i].substr(1)
        }
        return str.join(" ");
    }

    public static async getFlairedAvatarAsBase64(avatarUrl: string, flair: string): Promise<string> {
        return await axios(`https://app.ponjo.club/v1/pride/avatar?flair=${flair}&avatar=${encodeURIComponent(avatarUrl)}&format=base64`, {
            method: "post",
        }).then(async response => {
            if (response.status !== 200) {
                return "An error occurred.";
            } else {
                return response.data.image.output;
            }
        });
    }
}