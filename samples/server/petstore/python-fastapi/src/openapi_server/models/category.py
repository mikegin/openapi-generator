# coding: utf-8

from datetime import date, datetime

from typing import Dict, List, Optional

from pydantic import BaseModel, EmailStr, validator


class Category(BaseModel):
    """NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).

    Do not edit the class manually.

    Category - a model defined in OpenAPI

        id: The id of this Category [Optional].
        name: The name of this Category [Optional].
    """

    id: Optional[int] = None
    name: Optional[str] = None